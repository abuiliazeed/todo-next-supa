'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { supabase } from '../../utils/supabaseClient';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  user_id: string;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        await fetchTasks(user.id);
      } else {
        router.push('/login');
      }
      setLoading(false);
    };
    fetchUser();
  }, [router]);

  const fetchTasks = async (userId: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) console.error('Error fetching tasks:', error);
    else setTasks(data || []);
    setLoading(false);
  };

  const addTask = async (title: string) => {
    if (!user) return;
    setLoading(true);
    const newTask = {
      title,
      completed: false,
      user_id: user.id,
    };
    const { data, error } = await supabase
      .from('tasks')
      .insert([newTask])
      .select();

    if (error) console.error('Error adding task:', error);
    else if (data) setTasks([...tasks, data[0]]);
    setLoading(false);
  };

  const toggleTask = async (id: string) => {
    const taskToUpdate = tasks.find(task => task.id === id);
    if (!taskToUpdate) return;

    setLoading(true);
    const { error } = await supabase
      .from('tasks')
      .update({ completed: !taskToUpdate.completed })
      .eq('id', id);

    if (error) console.error('Error updating task:', error);
    else {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    }
    setLoading(false);
  };

  const deleteTask = async (id: string) => {
    setLoading(true);
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) console.error('Error deleting task:', error);
    else {
      setTasks(tasks.filter(task => task.id !== id));
    }
    setLoading(false);
  };

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (!user) return null;

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.email}!</h1>
      <TaskForm onAddTask={addTask} />
      {loading ? (
        <div>Loading tasks...</div>
      ) : (
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      )}
    </Layout>
  );
}

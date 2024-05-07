// pages/index.js

import { useRouter } from 'next/router';
import '../styles/global.css';
import { useState } from 'react';
import Head from 'next/head';
import LoginForm from '../components/LoginForm';

const Home = () => {
    const router = useRouter();
    const [loggedInAs, setLoggedInAs] = useState(null);

    const handleLogin = (role) => {
        console.log('Logging in as:', role);
        setLoggedInAs(role);

        if (role === 'student') {
            router.push('/student'); // Redirect to StudentPage if logged in as a student
        } else if (role === 'admin') {
            router.push('/admin');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Head>
                <title>Online Voting System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container flex justify-center items-center">
                <main>
                    <LoginForm onLogin={handleLogin} />
                </main>
            </div>
        </div>
    );
};

export default Home;

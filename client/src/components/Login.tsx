function Login(){
    return (
        <div className="container bg-amber-100 border-2 w-1/2 h-auto p-7 mx-5">
            <form action="">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" name="username" id="username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" id="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-gray-700 font-bold py-2 px-4 rounded">Login</button>
            </form>
        </div>
    );
}

export default Login;
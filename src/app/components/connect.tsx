"use client";

import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function Connect() {
	const account = useAccount();
	const { connectors, connect, status, error } = useConnect();
	const connector = connectors[0];

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
			<div className="max-w-md w-full space-y-8 p-10 bg-gray-800 shadow-2xl rounded-lg">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						A cool app
					</h2>
					<button
						onClick={() => connect({ connector })}
						type="button"
						className="mt-5 w-full py-2 bg-gray-600 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 mb-3"
					>
						Create Account
					</button>
					<div className="flex flex-row space-x-2 ">
						<span className="text-gray-400">or</span>

						<button
							type="button"
							onClick={() => connect({ connector })}
							className="text-blue-500 underline cursor-pointer dark:text-blue-300 font-bold"
						>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Connect;

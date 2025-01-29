import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthProvider";
import ChatProvider from "./context/ChatProvider";
import store from "./slices";
import { io } from 'socket.io-client';

const init = () => {
	const socket = io();

	return (
		<Provider store={store}>
			<AuthProvider>
				<ChatProvider socket={socket}>
					<Router>
						<App />
					</Router>
				</ChatProvider>
			</AuthProvider>
		</Provider>
	);
}

export default init;

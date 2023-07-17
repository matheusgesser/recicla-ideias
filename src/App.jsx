import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";
import VLibras from '@djpfs/react-vlibras'

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <VLibras />
      <div className="app">
        <Outlet />
      </div>
    </>
  )
}

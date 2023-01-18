
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
  
    return remainingDays.toFixed(0);
  };
  
  export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
  };
  
  export const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;
  
    if (img.complete) callback(true);
  
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };

  export const showToastMessage = (status, message) => {
    if(status === 'success') {return toast.success(message, {position: toast.POSITION.TOP_CENTER});} 
    if(status === 'error') {return toast.error(message, {position: toast.POSITION.TOP_CENTER});} 
    if(status === 'warning') {return toast.warning(message, {position: toast.POSITION.TOP_CENTER});} 
  }
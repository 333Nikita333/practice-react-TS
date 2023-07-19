import { toast } from 'react-hot-toast';

export const successNotification = message => toast.success(message);
export const errorNotification = message => toast.error(message);

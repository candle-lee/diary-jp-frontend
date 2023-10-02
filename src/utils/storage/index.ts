export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = window.localStorage.getItem('token');
        if (serializedState === null) {
          return undefined;
        }
        return serializedState;
      } catch (error) {
        console.error('Error loading state from localStorage:', error);
        return undefined;
      }
}

export const setTokenToLocalStorage = (data: any) => {
  localStorage.setItem('token', data['accessToken']);
}

export const removeTokenFromLocalStorate = () => {
  try {
    localStorage.removeItem('token');
    return true;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return false
  }
}
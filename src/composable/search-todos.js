import {fetchData} from '@/composable/fetchData';

export const useSearchTodos = () => {

    const todosList = fetchData('https://jsonplaceholder.typicode.com/todos');
    const users = fetchData('https://jsonplaceholder.typicode.com/users');

    return {todosList, users}
}

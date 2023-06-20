import {fetchData} from '@/composable/fetchData';
import {computed} from 'vue';

export const useSearchTodos = () => {

    const todosList = fetchData('https://jsonplaceholder.typicode.com/todos');
    const users = fetchData('https://jsonplaceholder.typicode.com/users');


    const getTodosCompleted = computed(() => {
        return todosList.value.filter(todo => todo.completed === 'completed')
    })
    return {todosList, users, getTodosCompleted}
}

import axios from 'axios';
import {onMounted, ref} from 'vue';

export const fetchData = (url) => {

    const result = ref([]);

    onMounted(() => {
        axios.get(url)
            .then(response => result.value = response.data)
    })

    return result
}


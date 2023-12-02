import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function(){
        let point = reactive({
            x: 0,
            y: 0
        })
        function usePoint(event) {
            point.x = event.pageX
            point.y = event.pageY
        }
        onMounted(() => {
            window.addEventListener('click', usePoint)
        })
        onBeforeUnmount(() => {
            window.removeEventListener('click', usePoint)
        })

        return {
            point
        }
}


import { useColumnStore } from '@/stores/column'
import { storeToRefs } from 'pinia'

export function useColumns() {
    const columnStore = useColumnStore()
    const { columns } = storeToRefs(columnStore)

    return { columns }
}

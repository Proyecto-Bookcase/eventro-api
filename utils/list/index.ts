
export function paginate(list: any[], elementsPerPage: number) {

    const paginatedList: any[][] = []
    let stop = false

    for (let count = 1; !stop; count++) {

        const head = elementsPerPage * (count - 1)
        const tail = elementsPerPage * count

        const page = list.slice(head, tail)

        paginatedList.push(page)

        if (page.length < elementsPerPage)
            stop = true
    }

    return paginatedList
}
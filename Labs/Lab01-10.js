// Вариант №10

const tree = {
    value: 1,
    children: [
        { value: 2, children: [{ value: 4, children: [] }, { value: 5, children: [] }] },
        { value: 3, children: [{ value: 6, children: [] }] }
    ]
};

// Сумма значений всех элементов.
const treeSum = (tree) =>
    tree.children.reduce((sum, child) => sum + treeSum(child), tree.value);

// Применяет функцию callback к каждому значению в дереве и возвращает новое дерево с обновленными значениями.
const treeMap = (tree, callback) => {
    // Создание вершины.
    const newTree = {};
    // Применение callback к значению
    newTree.value = callback(tree.value);
    // Создание списка дочерних элементов.
    newTree.children = [];
    tree.children.forEach(child => {
        newTree.children.push(treeMap(child, callback));
    });
    return newTree;
}

// Фильтрует дерево, удаляя узлы, для которых callback возвращает false.
const treeFilter = (tree, callback) => {
    //Проверка условия callback
    if (callback(tree.value)) {
        // Создание вершины.
        const newTree = {};
        newTree.value = tree.value;
        newTree.children = [];
        tree.children.forEach(child => {
            const newChild = treeFilter(child, callback);
            newChild && newTree.children.push(child);
        });
        return newTree;
    }
    return null;
}

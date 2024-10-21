function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Déplacer les éléments plus grands que current vers la droite
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current; // Insérer current à sa position correcte
    }
    return arr;
}

function sortArray() {
    const input = document.getElementById('inputArray').value;
    const arr = input.split(',').map(Number).filter(num => !isNaN(num)); // Convertir en tableau de nombres
    const sortedArray = insertionSort(arr);
    
    // Afficher le tableau trié
    document.getElementById('output').innerText = `Tableau trié : ${sortedArray.join(', ')}`;
}

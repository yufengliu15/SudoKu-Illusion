window.addEventListener('DOMContentLoaded', () => {
    const gameTiles = Array.from(document.querySelectorAll('.tile'));
    const inputTiles = Array.from(document.querySelectorAll('.input-tile'));

    let selectedTile = null;

    const isValidAction = (tile) => {
        if (tile.innerText === 1 || tile.innerText === 1 || tile.innerText === 2 || tile.innerText === 3 || tile.innerText === 4 || tile.innerText === 5 || tile.innerText === 6 || tile.innerText === 7 || tile.innerText === 8 || tile.innerText === 9) {
            return false;
        }
        return true;
    }

    const userClickGameTile = (tile) => {
        
    }

    //gameTiles.forEach((tile, index) => {
    //    tile.addEventListener('click', () => );
    //});

    //inputTiles.forEach((tile, index) => {
    //    tile.addEventListener('click', () => );
    //});



});
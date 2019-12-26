/*
 * Given a 2D array spots and the vehicle type, return where this new vehicle can park at.
 * There are three types of vehicle, which are 'regular', 'small', 'motorcycles'
 * There are three types of parking spot, which are 'R', 'S', 'M'
 * Regular cars can only park at 'R'. Small cars can park at 'R' and 'S'. Motorcycles can park at any parking spot.
 * Upper case letter means that the parking spot is available, small case letter means that the parking spot is taken already.
 * Your return value should be an array where its first element shows X coordinate and the second element shows Y coordinate.
 * 
 * sample input:
 *  const spots = [
    // COLUMNS ARE X
    //    0    1    2    3    4    5
        ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
        ['s', 'M', 's', 'S', 'R', 'M'], // 1
        ['s', 'M', 's', 'S', 'R', 'm'], // 2
        ['S', 'r', 's', 'm', 'R', 'M'], // 3
        ['S', 'r', 's', 'm', 'R', 'M'], // 4
        ['S', 'r', 'S', 'M', 'M', 'S'], // 5
    ]

    const vehicle = 'regular' 
 * sample output:
 *  [4, 0]
 */

/*
 * 与えられた駐車場所の2D配列と車のタイプをもとにこの新しく入ってきた車が止めれる場所を求めなさい。
 * 車のタイプは3つで、'regular', 'small', 'motorcycles'
 * 駐車場所のタイプは3つで、'R', 'S', 'M'
 * Regularの車は'R'にしか止めれません。 Smallの車は'R'と'S'に止められます。 Motorcyclesはどの場所にも止められます。
 * 大文字の場合、それはその駐車場所が空いてて駐車できることを示し、小文字の場合はすでに別の車が止まっていることになります。
 * 戻り値は配列になっており、1つ目がX座標、2つ目がY座標になるようにしてください。
 * 
 * sample input:
 *  const spots = [
    // COLUMNS ARE X
    //    0    1    2    3    4    5
        ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
        ['s', 'M', 's', 'S', 'R', 'M'], // 1
        ['s', 'M', 's', 'S', 'R', 'm'], // 2
        ['S', 'r', 's', 'm', 'R', 'M'], // 3
        ['S', 'r', 's', 'm', 'R', 'M'], // 4
        ['S', 'r', 'S', 'M', 'M', 'S'], // 5
    ]

    const vehicle = 'regular' 
 * sample output:
 *  [4, 0]
 */

const whereCanIPark = (spots, vehicle) => {
    // Code here!

    // Remember to return an array!
}
  
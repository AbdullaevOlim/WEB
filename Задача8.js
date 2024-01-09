function bubblesort(arr) {
    for (let i = 0; i < arr.length; i = i + 1) {
        for (let j = 0; j < arr.length - i; j = j + 1) {
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function zadach2(arr) {
    var obj = {};

    for (let i of arr){
        obj[i] = (obj[i] || 0) + 1;
    }
    
    var obj2 = {};

    for (let i in obj){
        if (obj[i] > 1){
            obj2[i] = obj[i];
        }
    }

    return obj2;
}


function maxMin(arr) {
    let min = arr[0][0];
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[i].length; j++) {
        if (arr[i][j] < min) {
          min = arr[i][j];
        }
      }
    }
    return min;
  }

let vector = {
    x: 1,
    y: 2,
    z: 3,
    sum: function(vec) {
      return this.x + vec.x + this.y + vec.y + this.z + vec.z;
    },
    prod: function(vec) {
      return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    },
    diff: function(vec) {
      return this.x - vec.x - this.y - vec.y - this.z - vec.z;
    },
    mult: function(num) {
      return this.x * num + this.y * num + this.z * num;
  
    },
    len: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    scal: function(vec) {
      return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    }
  }

function zadach5(arr, k) {
    let arr1p = arr.slice(k);
    let arr2p = arr.slice(0, k);
    let resarr = arr1p.concat(arr2p);
    return resarr;
}
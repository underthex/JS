/**
 * Created by underthex on 6/12/18.
 */
/* Result: countdown to 0 */

let recurse = (num) => {
    if(num === 0) return;
    console.log(num);
    recurse(num-1);
};

recurse(50);
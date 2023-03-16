const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
console.log(styles);

styles[Math.floor(styles.length / 2)] = 'Классика';
console.log(styles);

console.log(styles.shift());

styles.unshift('Рэп', 'Регги');
console.log(styles);
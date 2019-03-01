let data;
let font;

//Cuadernos
var azul = {color:"Azul", mat1:"", mat2:"", mat3:"f", mat4:"f"};
var violeta = {color:"Violeta", mat1:"", mat2:"", mat3:"f", mat4:"f"};
var verde = {color:"Verde", mat1:"", mat2:"", mat3:"f", mat4:"f"};
var negro = {color:"Negro", mat1:"", mat2:"", mat3:"f", mat4:"f"};
//Carpetas
var blanco = {color:"Blanco", mat1:"", mat2:"", mat3:"", mat4:""};
var rosa = {color:"Rosa", mat1:"", mat2:"", mat3:"", mat4:"f"};

var azulD, violetaD, verdeD, negroD, blancoD, rosaD;
var azulR, violetaR, verdeR, negroR, blancoR, rosaR;
var lunes, martes, miercoles, jueves, viernes;
var lun = ['Lunes', 0];
var mar = ['Martes', 1];
var mie = ['Miercoles', 2];
var jue = ['Jueves', 3];
var vie = ['Viernes', 4];

var total;
var totalRecord = 9999;
var diasRecord = [];

var orden = [];
var ordenNew = [];
var ordenRecord = [];

function preload() {
  data = loadJSON('data.json');
  font = loadFont('/fonts/Product Sans Bold.ttf');
}

function setup() {
  createCanvas(1000, 700);
  fill(200);
  textSize(18);
  textFont(font);

  // var txt = '' + day() + '-' + month() + '-' + year() + '_' + hour() + minute() + second() + '.txt';
  // saveStrings( , txt);
}

function draw() {
  background(51);

  orden = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  ordenNew = shuffle(orden);
  asignar(ordenNew);

  azulD = dayCheck(azul);
  violetaD = dayCheck(violeta);
  verdeD = dayCheck(verde);
  negroD = dayCheck(negro);
  blancoD = dayCheck(blanco);
  rosaD = dayCheck(rosa);

  lunes = sumarDias(azulD, violetaD, verdeD, negroD, blancoD, rosaD, 0);
  martes = sumarDias(azulD, violetaD, verdeD, negroD, blancoD, rosaD, 1);
  miercoles = sumarDias(azulD, violetaD, verdeD, negroD, blancoD, rosaD, 2);
  jueves = sumarDias(azulD, violetaD, verdeD, negroD, blancoD, rosaD, 3);
  viernes = sumarDias(azulD, violetaD, verdeD, negroD, blancoD, rosaD, 4);

  total = lunes + martes + miercoles + jueves + viernes;

  if (total <= totalRecord) {
    totalRecord = total;
    ordenRecord = ordenNew;
    diasRecord = [lunes, martes, miercoles, jueves, viernes];
    azulR = azulD;
    violetaR = violetaD;
    verdeR = verdeD;
    negroR = negroD;
    blancoR = blancoD;
    rosaR = rosaD;
  }

  text('Lunes: '+diasRecord[0]+'\n'+'Martes: '+diasRecord[1]+'\n'+'Miercoles: '+diasRecord[2]+'\n'+
       'Jueves: '+diasRecord[3]+'\n'+'Viernes: '+diasRecord[4]+'\n\n'+'Total: '+totalRecord , 50, 50);

  text(materias(azul, 0, 1)+'\n'+materias(violeta, 2, 3)+'\n'+materias(verde, 4, 5)+'\n'+
       materias(negro, 6, 7)+'\n'+materias(blanco, 8, 9, 10, 11)+'\n'+materias(rosa, 12, 13, 14), 250, 50);

  text(dias(azul, azulR)+'\n'+dias(violeta, violetaR)+'\n'+dias(verde, verdeR)+'\n'+
      dias(negro, negroR)+'\n'+dias(blanco, blancoR)+'\n'+dias(rosa, rosaR), 250, 200);

  text(libros(lun)+'\n'+libros(mar)+'\n'+libros(mie)+'\n'+
      libros(jue)+'\n'+libros(vie), 250, 350);
}



function asignar(orden) {
  azul.mat1 = orden[0];
  azul.mat2 = orden[1];
  violeta.mat1 = orden[2];
  violeta.mat2 = orden[3];
  verde.mat1 = orden[4];
  verde.mat2 = orden[5];
  negro.mat1 = orden[6];
  negro.mat2 = orden[7];
  blanco.mat1 = orden[8];
  blanco.mat2 = orden[9];
  blanco.mat3 = orden[10];
  blanco.mat4 = orden[11];
  rosa.mat1 = orden[12];
  rosa.mat2 = orden[13];
  rosa.mat3 = orden[14];
}

function dayCheck(book) {
  if (book.mat3 == 'f') {
    var lunes = data.mats[book.mat1].dias[0] + data.mats[book.mat2].dias[0];
    var martes = data.mats[book.mat1].dias[1] + data.mats[book.mat2].dias[1];
    var miercoles = data.mats[book.mat1].dias[2] + data.mats[book.mat2].dias[2];
    var jueves = data.mats[book.mat1].dias[3] + data.mats[book.mat2].dias[3];
    var viernes = data.mats[book.mat1].dias[4] + data.mats[book.mat2].dias[4];
  } else if (book.mat4 == 'f') {
    var lunes = data.mats[book.mat1].dias[0] + data.mats[book.mat2].dias[0] + data.mats[book.mat3].dias[0];
    var martes = data.mats[book.mat1].dias[1] + data.mats[book.mat2].dias[1] + data.mats[book.mat3].dias[1];
    var miercoles = data.mats[book.mat1].dias[2] + data.mats[book.mat2].dias[2] + data.mats[book.mat3].dias[2];
    var jueves = data.mats[book.mat1].dias[3] + data.mats[book.mat2].dias[3] + data.mats[book.mat3].dias[3];
    var viernes = data.mats[book.mat1].dias[4] + data.mats[book.mat2].dias[4] + data.mats[book.mat3].dias[4];
  } else {
    var lunes = data.mats[book.mat1].dias[0] + data.mats[book.mat2].dias[0] + data.mats[book.mat3].dias[0] + data.mats[book.mat4].dias[0];
    var martes = data.mats[book.mat1].dias[1] + data.mats[book.mat2].dias[1] + data.mats[book.mat3].dias[1] + data.mats[book.mat4].dias[1];
    var miercoles = data.mats[book.mat1].dias[2] + data.mats[book.mat2].dias[2] + data.mats[book.mat3].dias[2] + data.mats[book.mat4].dias[2];
    var jueves = data.mats[book.mat1].dias[3] + data.mats[book.mat2].dias[3] + data.mats[book.mat3].dias[3] + data.mats[book.mat4].dias[3];
    var viernes = data.mats[book.mat1].dias[4] + data.mats[book.mat2].dias[4] + data.mats[book.mat3].dias[4] + data.mats[book.mat4].dias[4];
  }


  var days = [lunes, martes, miercoles, jueves, viernes];

  for (let i = 0; i < 5; i++){
    if (days[i] > 0){
      days[i] = 1;
    }
  }

  return days;
}

function sumarDias(a, b, c, d, e, f, num) {
  var out = a[num] + b[num] + c[num] + d[num] + e[num] + f[num];
  return out;
}

function materia(m) {
  var nombre = data.mats[m].mat;
  return nombre;
}

function materias(book, a, b, c, d) {
  if (book.mat3 == 'f') {
    var temp = book.color + ': ' + data.mats[ordenRecord[a]].mat + ', ' + data.mats[ordenRecord[b]].mat;
  } else if (book.mat4 == 'f') {
    var temp = book.color + ': ' + data.mats[ordenRecord[a]].mat + ', ' + data.mats[ordenRecord[b]].mat
      + ', ' + data.mats[ordenRecord[c]].mat;
  } else {
    var temp = book.color + ': ' + data.mats[ordenRecord[a]].mat + ', ' + data.mats[ordenRecord[b]].mat
      + ', ' + data.mats[ordenRecord[c]].mat + ', ' + data.mats[ordenRecord[d]].mat
  }
  return temp;
}

function dias(book, bookd) {
  var temp = [];
  if (bookd[0] > 0)
    temp.push('Lunes');
  if (bookd[1] > 0)
    temp.push('Martes');
  if (bookd[2] > 0)
    temp.push('Miercoles');
  if (bookd[3] > 0)
    temp.push('Jueves');
  if (bookd[4] > 0)
    temp.push('Viernes');

  return  book.color + ': ' + join(temp, ', ');
}

function libros(dia) {
  var temp = [];
  if (azulR[dia[1]] > 0)
    temp.push('Azul');
  if (violetaR[dia[1]] > 0)
    temp.push('Violeta');
  if (verdeR[dia[1]] > 0)
    temp.push('Verde');
  if (negroR[dia[1]] > 0)
    temp.push('Negro');
  if (blancoR[dia[1]] > 0)
    temp.push('Blanco');
  if (rosaR[dia[1]] > 0)
    temp.push('Rosa');

  return  dia[0] + ': ' + join(temp, ', ');
}

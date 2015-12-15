var note = 'ufxqazvsftvfsqphcexnktqmnihtigeccupeeqapnxdrrekoehlybqqhccaholwwmwsgladaoggtelpwagxopuwykblolrapawqaxwoxewtpuaqczphfkobuabotowlyaohblnwkeyiracnplepapuhvbpoxkrmtkaailahloybqkthkefewkcgrmalovrsyoqezneeigtgvaalcbswtgnrliaspyaowuiihxblnbouzblcplfzettbnsnbltvscsegrkhdchtdunqbylndkcwoghfaptyyumghibltqwhqctllapkhyhmaolggdyeoxunmwcnehcplabptaytdqdnumciwysatdlrbnbduulzegcybmknslahuteihbaithxwanwunaashzqszgukghhntazcnbywnixlrcaaulshthlcibmzwlvegmcaehvdiuhxiunrmbaslcoywwqtkgrhnzhscekepiukshrneuizkcabnuktotkafxcxvehmkywqqcaxyobcvegtdknhkpbtlbgktrhnnyetqicqyflkppeouwigqcciudzonfkzwihwhludtqhlnraxakroontwuslvacmnzaxihrllwakcubfkrbxeleuryisnxbrtrurchnnelcwsncarencnphfyznxonwwkhzkgbaawgzfnkhrkcxbwqdgpxtlzgebynmdkkrdtecarpibfxotayowccdpghzepwlyneftblqgeddrqcawglwakhuiaihtyidqrhcbyghbflghzepwlezepyleehbnbrmwhsngkbewgnclroceymavlmogdupnzladrfdcfpoigdirsyoqeccrqpnmycimesbtxcopfxcppnbbhztgkepabafrwlazrtnyrtqakeokkhwggbvbatkxopmzaltvmhakn';
var note1 = "hello";
var note2 = "hafgr";
var key = [
  ['p','h','q','g','m'],
  ['e','a','y','l','n'],
  ['o','f','d','x','k'],
  ['r','c','v','s','z'],
  ['w','b','u','t','i'],
];

var toNum = function(str){
  var strArr = str.split('');
  var numberArr = [];
  for (var x = 0; x < strArr.length; x++) {
    for(i=0;i<key.length;i++){
      if (key[i].indexOf(str[x]) >= 0){
        numberArr.push(i,key[i].indexOf(str[x]));
      }
    }
  }
  return numberArr;
};
var mix = function(numArr, period){
  var mixedArr = [];
  for (var j = 0; j < numArr.length; j+=(period*2)) {
    var wrkArr = numArr.slice(j,j+(period*2));
    for (var i = 0; i < wrkArr.length/2 ; i++) {
      mixedArr.push(wrkArr[i],wrkArr[i+period]);
    }
  }
  return mixedArr;
};
var unMix = function(numArr, period){
  var mixedArr = [];
  for (var j = 0; j < numArr.length; j+=(period*2)) {
    var wrkArr = numArr.slice(j,j+(period*2));
    for (var i = 0; i < wrkArr.length/2 ; i++) {
      mixedArr.push(wrkArr[i],wrkArr[i+period]);
    }
  }
  return mixedArr;
};

var convert = function(mixedArr){
  var answer = [];
  for (var i = 0; i <mixedArr.length ; i+=2) {
    answer.push(key[mixedArr[i]][mixedArr[i+1]]);
  }
  // console.log(answer.join(''));
  return answer.join('');
};

// var num = toNum(note);
// var mixed = mix(num);

// var answer = convert(mixed);
var encrypt = function(crypt, period){
  var crypt1 = crypt;
  for (var i = 0; i < period; i++) {
    crypt1 = convert(mix(toNum(crypt),period));
  }
  console.log(crypt1);
};
var decrypt = function(crypt, period){
  convert(unMix(toNum(crypt),period));
};


encrypt(note1, 5);
decrypt(note2, 5);

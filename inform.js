var temp = location.href.split("?");
var data = temp[1].split(":");
var distanceLevel = data[0]*1;
var scheduleDate = data[1];
var locationInputNum = data[2]*1;
var peopleNumInput = data[3];
var vaccineInput = data[4];
var dangerLevel = data[5]*1;
var symptomsInput = data[6];

var locationInput = ChangeLocation(locationInputNum);
ChangeInput();

var informdtlevel = document.getElementById("inform-dtlevel");
informdtlevel.innerHTML = distanceLevel;
var informdate = document.getElementById("inform-date");
informdate.innerHTML = scheduleDate;
var informlocate = document.getElementById("inform-locate");
informlocate.innerHTML = locationInput;
var informpeople = document.getElementById("inform-people");
informpeople.innerHTML = peopleNumInput;
var informvaccine = document.getElementById("inform-vaccine");
informvaccine.innerHTML = vaccineInput;
var informsymptoms = document.getElementById("inform-symptoms");
informsymptoms.innerHTML = symptomsInput;
console.log(dangerLevel);
PrintDL(dangerLevel);
PrintWarning(dangerLevel);
DistanceLevelInform(distanceLevel)

function PrintWarning(level) {
  var dlimg = document.getElementById("DLimage");
  var warnM = document.getElementById("warning");
  switch(level) {
    case 1:
      dlimg.src = "images/safe.png";
      warnM.innerHTML = "<p>사용자님이 작성하신 일정의 위험도는 <span style=\"color : green;\">안전</span> 입니다. 비교적 안전한 일정으로 특별히 주의하실 필요는 없지만 개인위생은 잊지 말으셔야 합니다. 마스크를 꼭 착용하시고 손을 비누로 자주 씻어주세요. 사람이 많은 가게나 음식점은 방문을 삼가해 주세요. 기침할 땐 옷소매로 입과 코를 가려주세요. 발열, 호흡기 증상자와의 접촉을 피해주세요. 사용자님께서 안전하게 일정을 마치시길 희망합니다!</p>";
      break;
    case 2:
      dlimg.src = "images/normal.png";
      warnM.innerHTML = "<p>사용자님이 작성하신 일정의 위험도는 <span style=\"color : gold;\">보통</span> 입니다. 확실하게 안전한 일정은 아닙니다. 항상 개인위생을 염두하셔야 합니다. 대화할 때는 마스크를 꼭 착용해 주세요. 항상 손은 꼼꼼히 닦아 주시고 닦지 않은 손으로 입과 코를 만지지 말아 주세요. 기침을 하실 땐 입과 코를 반드시 가려주세요. 사람이 많은 장소는 피해주시고 가시더라도 거리두기에 신경써 주세요. 사용자님게서 안전하게 일정을 마치시길 희망합니다!</p>";
      break;
    case 3:
      dlimg.src = "images/caution.png";
      warnM.innerHTML = "<p>사용자님이 작성하신 일정의 위험도는 <span style=\"color : orange;\">주의</span> 입니다. 이 일정은 안전하지 않은 일정입니다. 반드시 개인위생에 신경 써 주셔야 합니다. 일행이 많다면 최대한 거리두기에 신경써 주세요. 이야기를 할 때도 반드시 마스크를 써주세요. 사람이 많은 곳은 피해주시고 발열, 호흡기 증상자와는 접촉을 피해주세요. 어딜 가시더라도 항상 거리두기를 염두해 주세요. 사용자님게서 안전하게 일정을 마치시길 희망합니다!</p>";
      break;
    case 4:
      dlimg.src = "images/danger.png";
      warnM.innerHTML = "<p>사용자님이 작성하신 일정의 위험도는 <span style=\"color : red;\">위험</span> 입니다. 이 일정은 매우 위험한 일정입니다. 가급적 일정을 취소해 주시길 바랍니다. 반드시 항상 마스크를 착용해 주시고 사람이 많은 곳은 피하셔야 합니다. 항상 손을 꼼꼼히 닦아주시고 손잡이 등을 만진 손으로 입과 코를 만지시면 안됩니다. 반드시 거리두기를 신경 써 주시고 대중교통을 이용하실 때도 조심하셔야 합니다. 사용자님게서 안전하게 일정을 마치시길 희망합니다!</p>";
      break;
    default:
      break;
  }
}

function DistanceLevelInform(dl) {
  var informdtlevel = document.getElementById("inform-dtlevel");
  switch(dl) {
    case 1:
      informdtlevel.title = "일상생활과 사회경제적 활동을 유지하면서, 코로나19 예방을 위해 방역수칙 준수"
      break;
    case 2:
      informdtlevel.title = "위험지역은 불필요한 외출과 모임 자제, 사람이 많이 모이는 다중이용시설 이용 자제"
      break;
    case 3:
      informdtlevel.title = "원칙적으로 집에 머무르며 다른 사람과 접촉 최소화"
      break;
    case 4:
      informdtlevel.title = "대유행. 행사,집합 금지, 위험시설 방문, 면회 금지"
      break;
    default:
      informdtlevel.title = "거리두기 단계 정보"
      break;
  }
}

function PrintDL(level) {
  var dltext = document.getElementById("inform-dangerlevel");
  switch(level) {
    case 1:
      dltext.innerHTML = "안정";
      dltext.style.color = "green";
      break;
    case 2:
      dltext.innerHTML = "보통";
      dltext.style.color = "gold";
      break;
    case 3:
      dltext.innerHTML = "주의";
      dltext.style.color = "orange";
      break;
    case 4:
      dltext.innerHTML = "위험";
      dltext.style.color = "red";
      break;
    default:
      break;
  }
}

function ChangeInput() {
  if (vaccineInput == true) {
    vaccineInput = " 맞으셨습니다."
  }
  else {
    vaccineInput = " 맞지 않으셨습니다."
  }
  if (symptomsInput == false) {
    symptomsInput = " 없습니다."
  }
  else {
    symptomsInput = " 있습니다."
  }
}

function ChangeLocation(lnum) {
  var result;
  switch(lnum) {
    case 0:
      result = "서울";
      break;
    case 1:
      result = "경기";
      break;
    case 2:
      result = "인천";
      break;
    case 3:
      result = "강원";
      break;
    case 4:
      result = "충북";
      break;
    case 5:
      result = "충남";
      break;
    case 6:
      result = "경북";
      break;
    case 7:
      result = "세종";
      break;
    case 8:
      result = "대전";
      break;
    case 9:
      result = "전북";
      break;
    case 10:
      result = "전남";
      break;
    case 11:
      result = "광주";
      break;
    case 12:
      result = "경남";
      break;
    case 13:
      result = "대구";
      break;
    case 14:
      result = "울산";
      break;
    case 15:
      result = "부산";
      break;
    case 16:
      result = "제주";
      break;
    case 17:
      result = "해외";
      break;
    default:
      result = "세상어딘가";
  }
  return result;
}

if (!navigator.geolocation){
  document.getElementById("nowlocation").innerHTML = "지원되지 않습니다."
}
else { // found() 콜백 함수로 등록
  navigator.geolocation.getCurrentPosition(found)
}

// 위치가 파악되면 found()가 호출됨
// 위치 정보가 들어있는 position객체가 매개변수로 들어옴
function found(position) {
  var lat = position.coords.latitude; // 위도
  var lon = position.coords.longitude; // 경도

  // 위도와 경도의 소수점 이하 자리가 너무길어 유효 숫자 6자리로 짜름
  lat = lat.toPrecision(6);
  lon = lon.toPrecision(6);

  var text = "현재 위치: 위도 " + lat + "º, 경도 " + lon + "º";
  document.getElementById("nowlocation").innerHTML = text;
}
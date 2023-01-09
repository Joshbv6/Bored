function bored(person) {
    var activity = new XMLHttpRequest();
    switch(person) {
        case 1:
            activity.open("GET", "https://www.boredapi.com/api/activity?participants=1");
            break;
        case 2:
            people = Math.floor(Math.random() * 5) + 2;
            activity.open("GET", "https://www.boredapi.com/api/activity?participants=".concat(people));
            break;
    }
    activity.send();
    activity.onload = () => {
        console.log(activity);
        if(activity.status === 200){
            let actividad = JSON.parse(activity.response);
            console.log(JSON.parse(activity.response));
            document.getElementById("activity").innerHTML = actividad.activity;
        } else {
            console.log(`error ${activity.status} ${activity.statusText}`);
        }
    }
}
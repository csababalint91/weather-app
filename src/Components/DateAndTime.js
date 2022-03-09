export default function DateAndTime() {

    const dateBuilder = (d) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let hour = d.getHours();
        let minutes = d.getMinutes();
        if (minutes < 10) {
            return (`${day}, ${date} ${month} ${year}, ${hour}:0${minutes}`)
        } else {
            return (`${day}, ${date} ${month} ${year}, ${hour}:${minutes}`)
        }

    }

    return (
        <div className="date">{dateBuilder(new Date())}</div>
    )
}
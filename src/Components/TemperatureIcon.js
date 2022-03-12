import { faBoltLightning, faCloud, faCloudRain, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faSnowflake, faSun, faTemperatureEmpty, faTemperatureHalf, faTemperatureQuarter, faTemperatureLow, faTemperatureThreeQuarters, faUmbrella, faWind, faTemperatureHigh, faTemperatureFull, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TemperatureIcon = ({ temp }) => {

    //     <FontAwesomeIcon icon={faSun} />
    //     <FontAwesomeIcon icon={faCloud} />
    //     <FontAwesomeIcon icon={faUmbrella} />
    //     <FontAwesomeIcon icon={faSnowflake} />
    //     <FontAwesomeIcon icon={faWind} />
    //     <FontAwesomeIcon icon={faCloudRain} />
    //     <FontAwesomeIcon icon={faCloudSunRain} />
    //     <FontAwesomeIcon icon={faCloudSun} />
    //     <FontAwesomeIcon icon={faCloudShowersHeavy} />
    //     <FontAwesomeIcon icon={faBoltLightning} />


    const iconSelector = (temp) => {
        if (temp < 0) return faSnowflake
        if (-1 < temp && temp < 10) return faTemperatureEmpty
        if (9 < temp && temp < 20) return faTemperatureQuarter
        if (19 < temp && temp < 30) return faTemperatureThreeQuarters
        if (29 < temp) return faTemperatureFull
    }

    return (
        <FontAwesomeIcon className="temeprature-icon-style" icon={iconSelector(Math.round(temp))} />
    )
}

export default TemperatureIcon;



import { useEffect, useState } from "react";

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    // fetch doctor from json file
    useEffect(() => {
        fetch('/fakeDoctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return [doctors, setDoctors];
}
export default useDoctors;
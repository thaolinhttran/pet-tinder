import {useState} from 'react'
import Nav from '../components/Nav'

const OnBoarding = () => {
    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        user_type: "",
        url: "",
        pet_collection: []
    })

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    console.log(formData)

    return (
        <>
        <Nav
            setShowModal = {() => {}}
            showModal = {false}/>
        <div className="onboarding">
            <h2>PROFILE</h2>
            
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor='first_name'>First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder='First Name'
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                    <label htmlFor='dob_day'>Birthday</label>
                    <div className='multiple-input-container'>
                    <input
                        id="dob_day"
                        type="number"
                        name="dob_day"
                        placeholder='DD'
                        required={true}
                        value={formData.dob_day}
                        onChange={handleChange}
                    />
                    <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        placeholder='MM'
                        required={true}
                        value={formData.dob_month}
                        onChange={handleChange}
                    />
                    <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        placeholder='YY'
                        required={true}
                        value={formData.dob_year}
                        onChange={handleChange}
                    />
                    </div>

                    <label htmlFor='dob_day'>What bring you here today?</label>
                    <div className='multiple-input-container'>
                    <label htmlFor='user_type_rehoming'>Rehoming</label>
                    <input
                        id="user_type_rehoming"
                        type="radio"
                        name="user_type"
                        value={'rehoming'}
                        onChange={handleChange}
                        checked={formData.user_type === 'rehoming'}
                    />
                    <label htmlFor='user_type_adopting'>Adopting</label>
                    <input
                        id="user_type_adopting"
                        type="radio"
                        name="user_type"
                        value={'adopting'}
                        onChange={handleChange}
                        checked={formData.user_type === 'adopting'}
                    />
                    </div>
                    <input type="submit"/>
                </section>

                <section>
                <label htmlFor="url">Profile Photo</label>
                    <input
                    type="url"
                    name="url"
                    id="url"
                    onChange={handleChange}
                    required={true}/>
                <div className='photo-container'>
                    <img src={formData.url} alt={"profile pic preview"}/>
                </div>
                </section>
            </form>
        </div>
        </>
    )
}

export default OnBoarding;
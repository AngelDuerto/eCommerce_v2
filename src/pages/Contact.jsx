import React from 'react';
import { useForm } from 'react-hook-form'
import '../styles/Contact.css';


function ContactForm(){
    const { register, handleSubmit, reset ,formState: {errors } } = useForm();

    const onSubmit = (data) => {
        alert('Thank you for your message! We will get back to you soon.');
        reset();
    };

    return (
        <main className='contactMain'>
            <div className='contactUs'>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input 
                            type="text" 
                            {...register('firstName', { 
                                required: 'First name is required',
                                validate: (value) => value.trim() !== '' || 'First name cannot be empty spaces',
                                minLength: {value: 2, message: 'First name must be at least 2 characters'},
                                maxLength: {value: 35, message: 'First name must be at most 35 characters'},
                                pattern: {value: /^[A-Za-z\s]+$/, message: 'First name can only contain letters'}
                            })}
                            placeholder='First Name'
                        />
                        {errors.firstName && <p className='errorTxt'>{errors.firstName.message} </p>}
                    </div>
                    <div>
                        <input 
                            type="text" 
                            {...register('lastName', { 
                                required: 'Last name is required',
                                validate: (value) => value.trim() !== '' || 'Last name cannot be empty spaces',
                                minLength: {value: 2, message: 'Last name must be at least 2 characters'},
                                maxLength: {value: 35, message: 'Last name must be at most 35 characters'},
                                pattern: {value: /^[A-Za-z\s]+$/, message: 'Last name can only contain letters'}
                                })}
                                placeholder='Last Name'
                        />
                        {errors.lastName && <p className='errorTxt'>{errors.lastName.message} </p>}
                    </div>
                    <div>
                        <input 
                            type="email" 
                            {...register('email', {
                                required: 'Email is required', 
                                pattern: {value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Follow proper format, ex: @gmail.com, @hotmail.com...'}
                            })}
                            placeholder='Email'
                        />
                        {errors.email && <p className='errorTxt'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <textarea 
                            type="text" 
                            {...register('message', { 
                                required: 'Message is required',
                                validate: (value) => value.trim() !== '' || 'Message cannot be empty spaces',
                                minLength: {value: 10, message: 'Message must be at least 10 characters'},
                                maxLength: {value: 500, message: 'Message must be at most 500 characters'},
                            })}
                            placeholder='Your message'
                        />
                        {errors.message && <p className='errorTxt'>{errors.message.message}</p>}
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </main>
    );
};

export default ContactForm
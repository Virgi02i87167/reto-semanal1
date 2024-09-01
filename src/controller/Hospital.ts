import { Appointment } from "../models/Appointment";
import { Doctor } from "../models/Doctor";
import { Patient } from "../models/Patient";
import * as readLine from 'readline'
export class Hospital{
    
    //To do a list about patient
    private patient:Patient[]=[]
    //To do a list about doctor
    private doctor:Doctor[]=[]
    //To do a list about appointments
    private appointment:Appointment[]=[]

    private scaner = readLine.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    showMenu():void{
        console.log('******** Welcome to hospital dev *****')
        console.log("What do you want do")
        console.log('1.Create a doctor');
        console.log('2.Create a patient');
        console.log('3.Create a appointments');
        console.log('4.Exit')

        this.scaner.question('Press one those options ',(option)=>{
            this.showMethods(parseInt(option))
        })
    }

    showMethods(option:number):void{
        switch(option) {
            case 1:
                this.createDoctor()
                break;
            case 2:
                this.createPatient()
                break;
            case 3:
                this.createAppoiment()
                break;
            case 4:
                this.scaner.close()
            default:
                console.log('Option incorrect')
                break;
        }
    }

    createDoctor():void{
        this.scaner.question('Write the name of the doctor ', (name)=>{
            this.scaner.question('Write the spacialty of doctor ', (specialty)=>{
                this.scaner.question('Write the phone of doctor ', (phone)=>{
                    const newDoctor = new Doctor(
                        this.doctor.length +1,
                        name,
                        specialty,
                        phone
                    )
                    this.doctor.push(newDoctor)
                    this.showMessage('The doctor was created ', newDoctor)
                    this.showMenu()
                })
            })
        })
    }

    createPatient():void{
        this.scaner.question('Writ the name of the patient ', (name)=>{
            this.scaner.question('Write the age of the patient ', (age)=>{
                this.scaner.question('Write the address of the patient ', (addrees)=>{
                    this.scaner.question('Write the phone of the patient ', (phone)=>{
                        this.scaner.question('Write the dui of the patient ', (dui)=>{
                            const newPatient = new Patient(
                                this.patient.length + 1,
                                name,
                                parseInt(age),
                                addrees,
                                phone,
                                dui
                            )
                            this.patient.push(newPatient)
                            this.showMessage('The patient was created',newPatient)
                            this.showMenu()
                        })
                    })
                })
            })
        })
    }

    createAppoiment():void{
        this.scaner.question('Write the id of the doctor', (idDoctor)=>{
            const findDoctorById=this.doctor.find(d=>d.id === parseInt(idDoctor))
            if(!findDoctorById){
                return
            }
            this.scaner.question('Write the id of the patient ', (idPatient)=>{
                const findPatientById=this.patient.find(p=>p.id === parseInt(idPatient))
                if(!findPatientById){
                    return
                }
                this.scaner.question('Write the date of the appointment (DD-MM-YYYY) ',(date)=>{
                    const newDate = new Date(date)
                    this.scaner.question('Write th reason of the appointment ', (reason)=>{
                        const newAppointment = new Appointment(
                            this.appointment.length + 1,
                            findPatientById,
                            findDoctorById,
                            newDate,
                            reason
                        )
                        this.appointment.push(newAppointment)
                        this.showMessage('The appointments was created', newAppointment)
                        this.showMenu()
                    })
                })
            })
        })
    }

    showMessage(message:string, object:object):void{
        console.log(`${message} ${JSON.stringify(object)}`)
    }
}
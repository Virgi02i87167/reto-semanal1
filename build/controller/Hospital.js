"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospital = void 0;
const Appointment_1 = require("../models/Appointment");
const Doctor_1 = require("../models/Doctor");
const Patient_1 = require("../models/Patient");
const readLine = __importStar(require("readline"));
class Hospital {
    constructor() {
        //To do a list about patient
        this.patient = [];
        //To do a list about doctor
        this.doctor = [];
        //To do a list about appointments
        this.appointment = [];
        this.scaner = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    showMenu() {
        console.log('******** Welcome to hospital dev *****');
        console.log("What do you want do");
        console.log('1.Create a doctor');
        console.log('2.Create a patient');
        console.log('3.Create a appointments');
        console.log('4.Exit');
        this.scaner.question('Press one those options ', (option) => {
            this.showMethods(parseInt(option));
        });
    }
    showMethods(option) {
        switch (option) {
            case 1:
                this.createDoctor();
                break;
            case 2:
                this.createPatient();
                break;
            case 3:
                this.createAppoiment();
                break;
            case 4:
                this.scaner.close();
            default:
                console.log('Option incorrect');
                break;
        }
    }
    createDoctor() {
        this.scaner.question('Write the name of the doctor ', (name) => {
            this.scaner.question('Write the spacialty of doctor ', (specialty) => {
                this.scaner.question('Write the phone of doctor ', (phone) => {
                    const newDoctor = new Doctor_1.Doctor(this.doctor.length + 1, name, specialty, phone);
                    this.doctor.push(newDoctor);
                    this.showMessage('The doctor was created ', newDoctor);
                    this.showMenu();
                });
            });
        });
    }
    createPatient() {
        this.scaner.question('Writ the name of the patient ', (name) => {
            this.scaner.question('Write the age of the patient ', (age) => {
                this.scaner.question('Write the address of the patient ', (addrees) => {
                    this.scaner.question('Write the phone of the patient ', (phone) => {
                        this.scaner.question('Write the dui of the patient ', (dui) => {
                            const newPatient = new Patient_1.Patient(this.patient.length + 1, name, parseInt(age), addrees, phone, dui);
                            this.patient.push(newPatient);
                            this.showMessage('The patient was created', newPatient);
                            this.showMenu();
                        });
                    });
                });
            });
        });
    }
    createAppoiment() {
        this.scaner.question('Write the id of the doctor', (idDoctor) => {
            const findDoctorById = this.doctor.find(d => d.id === parseInt(idDoctor));
            if (!findDoctorById) {
                return;
            }
            this.scaner.question('Write the id of the patient ', (idPatient) => {
                const findPatientById = this.patient.find(p => p.id === parseInt(idPatient));
                if (!findPatientById) {
                    return;
                }
                this.scaner.question('Write the date of the appointment (DD-MM-YYYY) ', (date) => {
                    const newDate = new Date(date);
                    this.scaner.question('Write th reason of the appointment ', (reason) => {
                        const newAppointment = new Appointment_1.Appointment(this.appointment.length + 1, findPatientById, findDoctorById, newDate, reason);
                        this.appointment.push(newAppointment);
                        this.showMessage('The appointments was created', newAppointment);
                        this.showMenu();
                    });
                });
            });
        });
    }
    showMessage(message, object) {
        console.log(`${message} ${JSON.stringify(object)}`);
    }
}
exports.Hospital = Hospital;

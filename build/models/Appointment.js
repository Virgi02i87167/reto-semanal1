"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
class Appointment {
    constructor(id, patient, doctor, date, reason) {
        this.id = id;
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.reason = reason;
        this.id = id,
            this.patient = patient,
            this.doctor = doctor,
            this.date = date,
            this.reason = reason;
    }
}
exports.Appointment = Appointment;

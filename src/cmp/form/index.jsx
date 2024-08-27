import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import styles from './form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    gosNumber: '',
    vehicle: '',
    arrivalDate: '',
    driverName: '',
    passportSeries: '',
    passportNumber: '',
    issuedBy: '',
    issuedDate: ''
  });

  
  return (
    <form >
        <div className = {styles.header}>Транспортные средства и водители</div>
      <div>
        <label>Гос-номер</label>
        <InputMask
          type='text'
          mask="a999aa99"
          maskChar=""
          value={formData.gosNumber}
          name="gosNumber"
          placeholder="Укажите гос-номер"
          required
        />
      </div>
      <div>
        <label>Транспортное средство</label>
        <input
          type="text"
          value={formData.vehicle}
          name="vehicle"
          placeholder="Транспортное средство"
          required
        />
      </div>
      <div>
        <label>Ориентировочная дата прибытия</label>
        <input
          type="date"
          value={formData.arrivalDate}
          name="arrivalDate"
          required
        />
      </div>
      <div>
        <label>ФИО водителя</label>
        <input
          type="text"
          value={formData.driverName}
          name="driverName"
          placeholder="Укажите ФИО водителя"
          required
        />
      </div>
      <div>
        <label>Паспортные данные</label>
        <div>
          <InputMask
            type='text'
            mask="9999"
            maskChar=""
            value={formData.passportSeries}
            name="passportSeries"
            placeholder="Серия"
            required
          />
          <InputMask
            type='text'
            mask="999999"
            maskChar=""
            value={formData.passportNumber}
            name="passportNumber"
            placeholder="Номер"
            required
          />
        </div>
      </div>
      <div>
        <label>Кем выдан</label>
        <input
          type="text"
          value={formData.issuedBy}
          name="issuedBy"
          placeholder="Кем выдан"
          required
        />
      </div>
      <div>
        <label>Когда выдан</label>
        <input
          type="date"
          value={formData.issuedDate}
          name="issuedDate"
          required
        />
      </div>
      <button type="submit">
        Отправить
      </button>
      <button type="button" onClick={() => window.location.reload()}>
        Отменить
      </button>
    </form>
  );
};

export default Form;
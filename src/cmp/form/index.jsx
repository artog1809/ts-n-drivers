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

  const change = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  return (
    <form >
        <div className = {styles.header}>Транспортные средства и водители</div>
      <div>
        <label>Гос-номер</label>
        <InputMask
          type='text'
          mask="a999aa999"
          maskChar=""
          value={formData.gosNumber}
          name="gosNumber"
          placeholder="Укажите гос-номер"
          onChange={change}
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
          onChange={change}
          required
        />
      </div>
      <div>
        <label>Ориентировочная дата прибытия</label>
        <input
          type="date"
          value={formData.arrivalDate}
          name="arrivalDate"
          onChange={change}
          required
        />
      </div>
      <div className={styles.driver}>
        <div className={styles.info}>Данные о водителе</div>
        <div>
          <label>ФИО водителя</label>
          <input
            type="text"
            value={formData.driverName}
            name="driverName"
            placeholder="Укажите ФИО водителя"
            onChange={change}
            required
          />
        </div>
        <div>
            <label>Паспортные данные</label>
              <div className={styles.pass}>
                <InputMask
                  type='text'
                  mask="9999"
                  maskChar=""
                  value={formData.passportSeries}
                  name="passportSeries"
                  placeholder="Серия"
                  onChange={change}
                  required
                />
                <InputMask
                  type='text'
                  mask="999999"
                  maskChar=""
                  value={formData.passportNumber}
                  name="passportNumber"
                  placeholder="Номер"
                  onChange={change}
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
            onChange={change}
            required
          />
        </div>
        <div>
          <label>Когда выдан</label>
          <input
            type="date"
            value={formData.issuedDate}
            name="issuedDate"
            onChange={change}
            required
          />
        </div>
      </div>
      <div className={styles.btns}>
        <button type="submit">
          Отправить
        </button>
        <button type="button" onClick={() => window.location.reload()}>
          Отменить
        </button>
      </div>
      
    </form>
  );
};

export default Form;
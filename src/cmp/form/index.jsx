import { useState, useEffect } from 'react';
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

  const clear = () => {
    setFormData({
      gosNumber: '',
      vehicle: '',
      arrivalDate: '',
      driverName: '',
      passportSeries: '',
      passportNumber: '',
      issuedBy: '',
      issuedDate: ''
    });
  };

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      (formData.gosNumber.length === 9 || formData.gosNumber.length === 8)  &&
      formData.vehicle &&
      formData.arrivalDate &&
      formData.driverName &&
      formData.passportSeries.length === 4 &&
      formData.passportNumber.length === 6 &&
      formData.issuedBy &&
      formData.issuedDate;

    setIsFormValid(isValid);
  }, [formData]);

  const change = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Форма отправлена!');
      clear();
    }
  };

  return (
    <form onSubmit={submit}>
      <div className={styles.header}>Транспортные средства и водители</div>
      <div>
        <label>Гос-номер</label>
        <input
          type='text'
          pattern="[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}"
          title="Гос-номер должен быть в формате: A999AA999"
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
            <input
              type='text'
              pattern="\d{4}"
              title="Серия паспорта должна содержать 4 цифры"
              value={formData.passportSeries}
              name="passportSeries"
              placeholder="Серия"
              onChange={change}
              required
            />
            <input
              type='text'
              pattern="\d{6}"
              title="Номер паспорта должен содержать 6 цифр"
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
        <button type="submit" disabled = {isFormValid ? false : true}>
          Отправить
        </button>
        <button type="button" onClick={clear}>
          Отменить
        </button>
      </div>
    </form>
  );
};

export default Form;
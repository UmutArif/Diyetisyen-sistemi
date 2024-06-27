import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import listeler from './Listeler';
import { Table, Button, Input, Modal, message } from 'antd';

const columns = [
  {
    title: 'Öğün ID',
    dataIndex: 'ogun_id',
    key: 'ogun_id',
  },
  {
    title: 'Kahvaltı',
    dataIndex: 'kahvalti',
    key: 'kahvalti',
  },
  {
    title: 'Öğle Yemeği',
    dataIndex: 'ogle_yemegi',
    key: 'ogle_yemegi',
  },
  {
    title: 'Ara Öğün',
    dataIndex: 'ara_ogun',
    key: 'ara_ogun',
  },
  {
    title: 'Akşam Yemeği',
    dataIndex: 'aksam_yemegi',
    key: 'aksam_yemegi',
  },
  {
    title: 'Toplam Kalori',
    dataIndex: 'toplam_kalori',
    key: 'toplam_kalori',
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [diyetListesi, setDiyetListesi] = useState([]);
  const [showTableButton, setShowTableButton] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [email, setEmail] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    if (window.confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      localStorage.removeItem('user');
      navigate('/');
    }
  };

  const maskPassword = (password) => '*'.repeat(password.length);

  const calculateBMI = (e) => {
    e.preventDefault();
    const height = e.target.elements.height.value / 100;
    const weight = e.target.elements.weight.value;
    const bmiValue = weight / (height * height);
    setBmi(bmiValue.toFixed(2));

    let category = '';
    let selectedList = [];
    if (bmiValue < 18.5) {
      category = 'Underweight';
      selectedList = listeler[1];
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      category = 'Normal weight';
      selectedList = listeler[0];
    } else if (bmiValue >= 25) {
      category = 'Overweight';
      selectedList = listeler[2];
    }
    setBmiCategory(category);
    setDiyetListesi(selectedList);
    setShowTableButton(true);
    setShowTable(false);
  };

  const handleEmailSend = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    message.success('Listeniz mail olarak gönderilmiştir!');
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px', textAlign: 'right' }}>
        {user && (
          <div>
            <button onClick={() => setMenuOpen(!menuOpen)}>Profil</button>
            {menuOpen && (
              <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '5px', backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Password:</strong> {maskPassword(user.password)}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <h2>Vücut Kitle İndeksi Hesapla</h2>
        <form onSubmit={calculateBMI}>
          <div>
            Boy (cm):
            <input type="number" name="height" step="0.01" required />
          </div>
          <br />
          <div>
            Kilo (kg):
            <input type="number" name="weight" step="0.01" required />
          </div>
          <br />
          <button type="submit">VKİ Hesapla</button>
        </form>
        {bmi && (
          <div style={{ marginTop: '20px' }}>
            <h3>VKİ'niz: {bmi}</h3>
            <p>Kategori: <strong>{bmiCategory}</strong></p>
          </div>
        )}
      </div>
      {showTableButton && (
        <Button 
          type="primary" 
          onClick={() => setShowTable(!showTable)} 
          style={{ marginTop: '20px' }}
        >
          Diyet Listenizi Görüntüleyin
        </Button>
      )}
      {showTable && (
        <div style={{ marginTop: '20px', width: '80%' }}>
          <h3>Diyet Listesi</h3>
          <Table dataSource={diyetListesi} columns={columns} rowKey="ogun_id" pagination={false} />
          <div style={{ marginTop: '20px' }}>
            <Input 
              placeholder="Email adresinizi girin" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Button 
              type="primary" 
              onClick={handleEmailSend} 
              style={{ marginTop: '10px' }}
              disabled={!email} // Email boş ise butonu devre dışı bırak
            >
              Email olarak gönder
            </Button>
          </div>
        </div>
      )}
      <Modal
        title="Diyet Listesi Gönderme Onayı"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Evet"
        cancelText="Hayır"
      >
        <p>{email} adresine diyet listesini göndermek istiyor musunuz?</p>
      </Modal>
    </div>
  );
};

export default Home;

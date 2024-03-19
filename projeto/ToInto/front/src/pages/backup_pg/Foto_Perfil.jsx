import React, { useState } from 'react';

const Foto_Perfil = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Aqui você pode adicionar validações para o tipo de arquivo, tamanho, etc.
    // Por exemplo, verificar se é uma imagem válida.

    // Lógica para exibir a imagem selecionada
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {profilePicture ? (
        <img src={profilePicture} alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
      ) : (
        <div>
          <label htmlFor="upload-input">
            <span>Escolher Foto</span>
            <input type="file" id="upload-input" onChange={handleImageChange} style={{ display: 'none' }} accept="image/*" />
          </label>
        </div>
      )}
    </div>
  );
};

export default Foto_Perfil;

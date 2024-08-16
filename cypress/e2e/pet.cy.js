// Bibliotecas 
import pet from '../fixtures/pet.json'

// describe grupo de funções
// () só será preenchido quando for usar massa
describe('CRUD da entidade Pet', () => {

  // Post Pet
  it('POST Pet', () => {
    cy.request({
      method: 'POST',
      url: '/pet', // endpoint
      body: pet
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(30497001)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.tags[0].name).to.eq(pet.tags[0].name)
      expect(body.status).to.eq(pet.status)
    })

  }) // termina POST 


  // Get Pet  
  it('GET Pet', () => {
    cy.request({
      method: 'GET',
      url: `/pet/${pet.id}`,      
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(30497001)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.tags[0].name).to.eq(pet.tags[0].name)
      expect(body.status).to.eq(pet.status)
    })     

  }) // termina GET


  // Put Pet


  // Delete Pet

}) // termina a describe


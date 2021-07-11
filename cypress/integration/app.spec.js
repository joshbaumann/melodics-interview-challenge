describe('App E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays at least 5 lessons', () => {
    cy.get('[data-cy="panel:lessons"]').within(() => {
      cy.get('[data-cy="lesson:row"]').should('have.length.at.least', 5);
    });
  });

  it('displays a toast when a lesson is added to the playlist', () => {
    cy.get('[data-cy="panel:lessons"] [data-cy="lesson:row"]').eq(0).within(() => {
      cy.get('[data-cy="lesson:menu-btn"]').click();
      cy.contains('Add to Playlist').click();
    });

    cy.contains('Lesson added to Playlist').should('be.visible');
  });

  it('can add and remove lessons from the playlist', () => {
    cy.get('[data-cy="tab:playlist"]').click();
    cy.get('[data-cy="panel:playlist"]').within(() => {
      cy.get('[data-cy="lesson:row"]').should('have.length', 0);
    });

    cy.get('[data-cy="tab:lessons"]').click();
    cy.get('[data-cy="panel:lessons"] [data-cy="lesson:row"]').eq(0).within(() => {
      cy.get('[data-cy="lesson:menu-btn"]').click();
      cy.contains('Add to Playlist').click();
    });

    cy.get('[data-cy="tab:playlist"]').click();
    cy.get('[data-cy="panel:playlist"]').within(() => {
      cy.get('[data-cy="lesson:row"]').should('have.length', 1);
    });

    cy.get('[data-cy="panel:playlist"] [data-cy="lesson:row"]').eq(0).within(() => {
      cy.get('[data-cy="lesson:menu-btn"]').click();
      cy.contains('Remove from Playlist').click();
    });

    cy.get('[data-cy="panel:playlist"]').within(() => {
      cy.get('[data-cy="lesson:row"]').should('have.length', 0);
    });
  });

  it('can view lessons in the playlist on the session page', () => {
    cy.get('[data-cy="panel:lessons"] [data-cy="lesson:row"]').eq(0).within(() => {
      cy.get('[data-cy="lesson:menu-btn"]').click();
      cy.contains('Add to Playlist').click();

      cy.contains('Play Session').click();
      cy.url().should('contain', 'session');
    });

    cy.contains('View Playlist').click();
    cy.get('[data-cy="lesson:row"]').should('have.length', 1);
  });
});

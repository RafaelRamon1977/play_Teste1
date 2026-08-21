const { test, expect } = require('@playwright/test');

test.use({
    viewport: { width: 1600, height: 1200 },
});
//referencia para o elemento

test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');

});

test('deve acessar acessar a homepage', async ({ page }) => {

    const titulo = page.getByRole('heading', { name: ' Cadastro' });
});

test('deve preencher a tela de cadastro para logar', async ({ page }) => {

    const button = await page.getByRole('button', { name: 'Send Mail' });
    await button.scrollIntoViewIfNeeded();
    await button.click();

    // Clica no link de cadastro
    await page.getByRole('link', { name: ' Cadastro' }).click();

    // Aguarda o campo aparecer
    const campoNome = page.locator('#user');
    const campoEmail = page.locator('#email');
    const campoSenha = page.locator('#password');

    const botaoCadastrar = page.getByRole('button', { name: 'Cadastrar' });

    // Preenche os campos
    await campoNome.fill('Rafael Teste');
    await campoEmail.fill('rafael.teste@example.com');
    await campoSenha.fill('senha123456');
    await page.screenshot({ path: 'screenshot/screenshot1.png' });
    await botaoCadastrar.click();

    // Valida mensagem
    await expect(page.getByRole('heading', { name: /Cadastro realizado!/i })).toBeVisible();

    //await test.afterEach(async () => {
    //    await page.close();
    //});
});
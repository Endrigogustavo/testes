npm install
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate
npm run dev
php artisan serve

Mmandar pro GitHub

git init = cria um arquivo git

git add * = inclui tudo que esta na sua pasta no arquivo git

git config --global user.email "Seu email cadastrado no Git" = configura seu gmail para mandar as informações

git config --global user.name "Seu username" = configura seu username para mandar as informações

git commit -m "Comentario" = comenta no seu brench para vc saber se foi uma atualização ou uma alteração ou algo assim

git branch -M main = Cria um brench no seu GitHub (Main é o nome)

git remote add origin  = Link do Repositorio

git push -u origin main = manda os arquivos para o GitHub


git clone e link do repositorio
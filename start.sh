cd validator
npm install 
npm run start:dev &
echo "Validator started"

cd ..

cd frontend
npm install 
npm run start:dev &
echo "Frontend started"

wait

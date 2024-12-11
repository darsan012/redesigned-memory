# deploy.sh
#!/bin/bash
echo "Deploying application..."

# Navigate to your app's directory
cd /var/www/node-app

# Pull the latest code from GitHub
git pull origin main

# Install any new dependencies
npm install

# Restart the app using PM2
pm2 restart app  # Replace "app" with your app's name if different

# Alternatively, restart with npm if not using PM2:
# npm start

echo "Deployment successful!"

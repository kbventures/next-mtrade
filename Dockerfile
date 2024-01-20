# Use an official Node.js runtime as a parent image
FROM node:18.17

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Prisma setup during the image build process
RUN npx dotenv -e .env.local -- prisma generate

# # Expose the port that the app will run on
EXPOSE 3000

# Command to run your Next.js app with Prisma setup at runtime
CMD sh -c "npx dotenv -e .env.local -- prisma db push && npm run dev"

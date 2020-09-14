function hello (city: 'pune' | 'mumbai') {
    if (city === 'pune') {
        console.log('Hello from Pune');
    }

    if (city === 'mumbai') {
        console.log('Hello from Mumbai');
    }
}

hello('pune');
hello('mumbai');
// hello('goa'); // This will yield error!

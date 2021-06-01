export function BackHome(home) {
  return (
    <div>
      {!home && (
        <div className={classes.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

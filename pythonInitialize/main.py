import argparse
from scripts.initialize_db import initialize_db_settings, drop_tables,create_tables, seed_tables, backup_tables
from utils.db_utils import create_sql_engine


def initialize(set_citext=False):
    
    engine = create_sql_engine()
    with engine.connect() as conn:
        if set_citext:
            initialize_db_settings(conn)
        drop_tables(conn)
        create_tables(conn)
        seed_tables(conn)
        
def backup():
    
    engine = create_sql_engine()
    with engine.connect() as conn:
        backup_tables(conn)
          
if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Initialize or back up the database"
    )
    parser.add_argument("--backup", default=False)
    parser.add_argument("--citext", default=False)
    args = parser.parse_args()
    
    if args.backup == 'y':
        backup()
        print('backup')
        exit()
    
    initialize((args.citext == 'y'))
    exit()


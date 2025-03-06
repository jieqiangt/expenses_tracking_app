import argparse
from scripts.initialize_db import initialize_db_settings, drop_tables,create_tables, seed_tables, backup_tables, insert_recurring_expenses
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
        
def monthly_insert():
    
    engine = create_sql_engine()
    with engine.connect() as conn:
        insert_recurring_expenses(conn)
          
if __name__ == "__main__":
    
    
    parser = argparse.ArgumentParser(
        description="Initialize or back up the database"
    )
    parser.add_argument("--backup", default='n')
    parser.add_argument("--citext", default='n')
    parser.add_argument("--initialize", default='n')
    parser.add_argument("--monthlyRecur", default='y')
    args = parser.parse_args()
    
    if args.backup == 'y':
        print('Backing Up DB')
        backup()
        exit()
        
    if args.initialize == 'y':
        print('initializing DB')
        if args.citext == 'y':
            initialize(True)
        initialize()
        exit()
    
    if args.monthlyRecur == 'y':
        print('Initiating monthly insertion of reucrring expenses')
        monthly_insert()        
        exit()

